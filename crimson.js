import { crimson } from "./module/config.js";
import CrimsonItemSheet from "./module/sheets/CrimsonItemSheet";

Hooks.once("init", function (){
    console.log("Crimson | Initialisation du système.")

    CONFIG.crimson = crimson;
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("crimson", CrimsonItemSheet, {makeDefault: true});
});