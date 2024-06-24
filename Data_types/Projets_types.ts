export class Projet {   
    id: number;
    nom: string;
    createdAt: string;
    
    listes: Liste[];
}

export class Liste {
    id: number;
    nom: string;
    projetId: number;

    taches: Tache[];
}

export class Tache {
    id: number;
    nom: string;
    detail:string;
    createdAt: string;
    endDate: string;
    listeId: number;

    commentaires: Commentaire[];
}

export class Commentaire {
    id: number;
    texte: string;
    createdAt: string;
    tacheId: number;
}
