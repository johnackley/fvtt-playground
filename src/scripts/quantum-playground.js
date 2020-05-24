class QuantumPlayground extends Application {
    constructor (options = {}){
        super(options);
        
        this._initHooks();
    }

    _initHooks() {
        // Hooks.on("init", () => {CONFIG.debug.hooks = true})
        
        // Hooks.on("getActorDirectoryFolderContext", (html, list) => {
        //     list.push({
        //         name: "Quantum Playground",
        //         icon: "<i class='fas fa-user-friends'></i>",
        //         callback: async directory => {
        //             this.ParentDirectoryId = directory.parent().attr("data-folder-id");
        //             this.render(true);
        //         }
        //     })
        // })
    }    

    /**
     * Override Title
     */
    get title(){
        return "Quantum Playground";
    }

    /**
     * Extend Default Options
     */
    static get defaultOptions() {
        return mergeObject(
            super.defaultOptions,
            {
                template: "modules/quantum-playground/src/templates/quantum-playground.html"
            }            
        );
    }

    /**
     * Override Submit handler to begin import
     */
    _onSubmit(ev){
        // ev.preventDefault();
        // this._startImport();
        // this.close();
    }

}

console.log("Hello World! Quantum Playground");

Hooks.on('init', () => {
    console.log("init hook: Quantum Playground");
    new QuantumPlayground({type:"directory"});
});

Hooks.on("ready", function() {
    console.log("ready hook: Quantum Playground");
});