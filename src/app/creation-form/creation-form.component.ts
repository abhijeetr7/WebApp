import { Component, OnInit } from '@angular/core';
import { ValidateModel, WebpageModel, formModel } from './formModel';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  // styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {

  model = new formModel();
  webpageModel = new WebpageModel();
  validatorModel = new ValidateModel();
  paramList: formModel[] = [];

  constructor(){

  }

  ngOnInit(): void {

  }

  addnew(){



    this.validatorModel.mandatory = this.validatorModel.mandatory,
      this.validatorModel.minlength = this.validatorModel.minlength,
      this.validatorModel.maxlength = this.validatorModel.maxlength,


    this.webpageModel.paramList.push({
      id: this.model.sequence,
      sequence: this.model.sequence,
      label: this.model.label,
      type: this.model.type,
      validator: this.validatorModel,

    })
    this.webpageModel.webpageName = this.webpageModel.webpageName
    this.webpageModel.paramList = this.webpageModel.paramList
    this.paramList = this.webpageModel.paramList

    console.log(this.webpageModel);

    this.model.sequence = this.model.sequence + 1;
    this.model.label = '';
    this.model.type = '';
    this.validatorModel.mandatory = true;
    this.validatorModel == undefined;
    this.validatorModel.minlength == undefined;
    this.validatorModel.maxlength == undefined;
    
  }

  spliceEntry(index: number): void {
    // alert("working")
    this.webpageModel.paramList.splice(index, 1);
    this.model.sequence = this.model.sequence - 1;
  }

}
