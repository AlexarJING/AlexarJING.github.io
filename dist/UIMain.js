import UI_Main from "./Package1/UI_Main";
import Snippet from "./snippet";
export default class UIMain extends UI_Main {
    onConstruct() {
        super.onConstruct();
        this.loadData();
        this.m_try.onClick(() => {
            this.updateByPrice();
        });
        this.m_all.onClick(() => {
            this.updateByALL();
        });
    }
    async loadData() {
        const response = await fetch('assets/json/complete_warcraft_data.json');
        this.data = await response.json();
        this.updateByPrice();
    }
    updateByPrice() {
        let heros = this.data.filter(d => d.isLeader);
        let hero = Snippet.pickRandom(heros);
        this.m_hero.m_title.text = hero.name;
        this.m_hero.m_icon.url = `assets/${hero.image}`;
        this.m_hero.m_gold.text = hero.gold.toFixed(0);
        for (let i = 0; i < 6; i++) {
            let minis = this.data.filter(d => !d.isLeader && (i == 0 ? (d.gold == 1 || d.gold == 10) : d.gold == i + 1));
            let mini = Snippet.pickRandom(minis);
            let item = this.m_list.getChildAt(i);
            item.m_title.text = mini.name;
            item.m_icon.url = `assets/${mini.image}`;
            item.m_gold.text = mini.gold.toFixed(0);
        }
    }
    updateByALL() {
        let heros = this.data.filter(d => d.isLeader);
        let hero = Snippet.pickRandom(heros);
        this.m_hero.m_title.text = hero.name;
        this.m_hero.m_icon.url = `assets/${hero.image}`;
        this.m_hero.m_gold.text = hero.gold.toFixed(0);
        let minis = Snippet.pickRandomItems(this.data.filter(d => !d.isLeader), 6);
        for (let i = 0; i < 6; i++) {
            let mini = minis[i];
            let item = this.m_list.getChildAt(i);
            item.m_title.text = mini.name;
            item.m_icon.url = `assets/${mini.image}`;
            item.m_gold.text = mini.gold.toFixed(0);
        }
    }
}
//# sourceMappingURL=UIMain.js.map