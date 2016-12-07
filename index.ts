import * as fs from "fs";
import * as child_process from "child_process";

import * as pathExists from "path-exists";
import * as Promise from "bluebird";

interface Iwpa {

    ssid: string;
    password?: string;
    encodedPassword: string;
    priority: number;

}

function writefile(file, conf, list: Iwpa[]) {
    for (let i = 0; i < list.length; i++) {
        conf = conf + "\n" + "network={";
        for (let o = 0; o < Object.keys(list[i]).length; o++) {
            if (Object.keys(list[i])[o] === 'psk') {
                conf = conf + "\n" + Object.keys(list[i])[o] + '=' + list[i][Object.keys(list[i])[o]];

            } else {
                conf = conf + "\n" + Object.keys(list[i])[o] + '="' + list[i][Object.keys(list[i])[o]] + '"';

            }


        }

        conf = conf + "\n" + "}";

    }


    fs.writeFileSync(file, conf, { encoding: "utf-8" });
    child_process.execSync('sync')

}


function fromlinetowpanets(lines) {
    let conf = "";
    const nets: Iwpa[] = [];
    let net;
    let start = false;
    let firstnet = false;
    let endnetwork = true;

    for (let i = 0; i < lines.length; i++) {
        let checkline = lines[i].replace(/\t/g, "");


        if (checkline[0] !== "#" || (checkline[0] === "#" && checkline[3] === "k" && checkline.split("psk").length === 2)) {
            if (checkline.split("etwork").length === 2 && endnetwork) {
                start = true;
                firstnet = true;
                endnetwork = false;
                net = {};
            } else if (checkline.replace(/ /g, "")[0] === "}" && firstnet) {
                endnetwork = true;
                firstnet = false;
                nets.push(net);

            } else if (firstnet && checkline.split("=").length === 2) {

                net[checkline.split("=")[0].replace(/ /g, "")] = checkline.split("=")[1].replace(/"/g, "");

            } else if (!start && checkline !== "") {
                if (conf !== "") {
                    conf = (conf + "\n" + checkline);
                } else {
                    conf = (checkline);
                }

            }



        }

    }

    return { list: nets, conf: conf };


}

export default class WpaMan {
    wpasupplicant_path: string;
    listwpa: Iwpa[];
    conf = "";
    constructor(file: string) {
        if (!pathExists.sync(file)) {
            throw Error("path exists not founded");
        }

        const wpafilelines = fs.readFileSync(file, "utf-8").split("\n");

        const obj = fromlinetowpanets(wpafilelines);
        this.conf = obj.conf;
        this.listwpa = obj.list;

        this.wpasupplicant_path = file;
    }

    addwpa(essid: string, password: string, priority?: number) {
        let exist;
        const nets = [];
        const list = this.listwpa;
        const conf = this.conf;
        const file = this.wpasupplicant_path;
        return new Promise(function (resolve, reject) {
            if (password.length < 8) {
                reject("passphrase must be 8 characters minimum")
            } else {
                child_process.exec("wpa_passphrase \"" + essid + "\" \"" + password + "\"", function (err, stdout, stderr) {
                    if (err || stderr) {
                        console.log(err);
                        console.log(stderr);
                        reject("error on wpa_passphrase");
                    }

                    let wpafilelines = stdout.split('\n');
                    let newnets = fromlinetowpanets(wpafilelines).list;

                    for (let i = 0; i < list.length; i++) {
                        exist = false;
                        for (let l = 0; l < newnets.length; l++) {
                            if (list[i].ssid === newnets[l].ssid) {
                                exist = true;
                            }
                        }
                        if (!exist) {
                            nets.push(list[i]);
                        }


                    }
                    for (let l = 0; l < newnets.length; l++) {
                        nets.push(newnets[l]);
                    }

                    list.length = 0;

                    for (let l = 0; l < nets.length; l++) {
                        list.push(nets[l]);
                    }


                    writefile(file, conf, list);
                    resolve(true);
                })
            }


        })

    }

    removewpa(ssid: string) {

        let list = this.listwpa;
        const conf = this.conf;
        const file = this.wpasupplicant_path;


        return new Promise(function (resolve, reject) {

            let relist: Iwpa[] = [];
            let exists = false;

            for (let i = 0; i < list.length; i++) {

                if (list[i].ssid !== ssid) {
                    relist.push(list[i])
                } else {

                    exists = true;

                }
            }

            if (exists) {

                list = relist
                writefile(file, conf, list);
                resolve(true)

            } else {
                reject('network not founded')

            }


        })
    }

}


