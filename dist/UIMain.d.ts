import UI_Main from "./Package1/UI_Main";
export default class UIMain extends UI_Main {
    data: {
        name: string;
        gold: number;
        image: string;
        isLeader: boolean;
    }[];
    protected onConstruct(): void;
    loadData(): Promise<void>;
    updateAll(): void;
}
