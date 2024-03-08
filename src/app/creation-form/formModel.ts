


export class formModel {
    id!: number;
    label!: string;
    type!: string;
    sequence!: number;
    validator!: ValidateModel;
    
}


export class WebpageModel {
    webpageName!: string;
    paramList: formModel[] = [];
}

export class ValidateModel {
    mandatory: Boolean= true;
    minlength!: number;
    maxlength!: number;
    lessthncurrentdate!: Boolean;
    greatthncurrentdate!: Boolean;
    currentdate!: Boolean;
    min!: number;

}