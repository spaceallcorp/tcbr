export interface Painel {
    id?: string;
    title: string;
    organizacao?: string;
    content: string;
    createdAt: Date | any;
    updatedAt?: Date | any;
    imageUrl: string; // Make sure this is required if you're using it
    painelUrl?: string; // Optional if not always provided

}

