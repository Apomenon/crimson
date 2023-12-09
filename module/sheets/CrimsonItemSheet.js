export default class CrimsonItemSheet extends ItemSheet {
    get template(){
        return `system/crimson/template/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.crimson;

        return data;
    }
}