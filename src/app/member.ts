export interface Member {
    name: string;
    email: string;
    image: string;
    createdAt: Date;
    team: string;
    startDate: Date;
    office: string;
    calculatedStatus: string;

}


interface Statuses {
    active : "Active";
    drop_in : "Drop-in"; 
    former : "Former";
    contact : "Contact";
    lead : "Lead";
}