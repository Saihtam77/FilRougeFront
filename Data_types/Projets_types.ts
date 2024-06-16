export class Projet {   
    id: number;
    nom: string;
    createdAt: string;
}

export class Liste {
    id: number;
    nom: string;
    createdAt: string;
    projet_id: number;
}

export class Tache {
    id: number;
    nom: string;
    detail:string;
    createdAt: string;
    liste_id: number;
}

export class Commentaire {
    id: number;
    texte: string;
    createdAt: string;
    tache_id: number;
}
