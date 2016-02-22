// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/9b4dfcf8d8f234b8e1cf97e0a95d51e90d39c67e/path-exists/path-exists.d.ts
// Type definitions for path-exists 1.0.0
// Project: https://github.com/sindresorhus/path-exists
// Definitions by: Shogo Iwano <https://github.com/shiwano>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "path-exists" {
    interface PathExists {
        (path: string, callback: (error: Error, exists: boolean) => void): void;
        sync(path: string): boolean;
    }

    var pathExists: PathExists;
    export = pathExists;
}