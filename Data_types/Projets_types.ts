export class Projet {
    id: number;
    nom: string;
    created_at: string;
    listes: Liste[];
}

export class Liste {
    id: number;
    nom: string;
    created_at: string;
    taches: Tache[];
}

export class Tache {
    id: number;
    nom: string;
    created_at: string;
    commentaires: Commentaire[];
}

export class Commentaire {
    id: number;
    texte: string;
    created_at: string;
}
