import { GitClient } from "./GitClient";
import { Git } from "./Config";

export class GitProvider {
    private static client: GitClient = null;
    private constructor() {}
    static getInstance(gitConfig: Git) {
        if (this.client === null) 
            this.client = new (require(gitConfig.client))(gitConfig)
        
        return this.client;
    }
}