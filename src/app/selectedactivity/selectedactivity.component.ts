import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Personne } from '../classes/personne';

@Component({
  selector: 'app-selectedactivity',
  templateUrl: './selectedactivity.component.html',
  styleUrls: ['./selectedactivity.component.css']
})
export class SelectedactivityComponent implements OnInit {
  part:boolean=false;
  Members:Personne[]=[];
  Activite2!:Activite;
  id!:number;
  parts:Personne[]=[];
  actform!: FormGroup;
  constructor(private actServ:ActivitiesService,private router:Router,private activatedRoute:ActivatedRoute,private fb:FormBuilder){}
  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.params['identif'];
   this.actServ.getActiviteById(this.id).subscribe(
    data=>{
      this.Activite2=data
    }
    );
    this.actServ.getparticipants(this.id).subscribe(
      data=>{
        this.parts=data
        }
    )
    this.actServ.getMembers().subscribe(
      data=>{
        this.Members=data
        }
    )
    this.actform=this.fb.group({
      id:[null],
      nom:[''],
      penom:[''],
      dateN:[],
      adrs:[''],
      email:['']

    })

  }
  participer(){
  this.part=!this.part;
  }
  verif1():boolean{
    for(let i=0;i<this.parts.length;i++){
      if(this.parts[i].id==this.actform.get("id")?.value){
        return true
      }
    }
    return false
  }
  verif2():boolean{
    for(let i=0;i<this.Members.length;i++){
      if(this.Members[i].id==this.actform.get("id")?.value){
        return true
      }
    }
    return false
  }
  onSubmitForm(nb:number,disp:boolean){
    if(this.verif1()){
      alert('vous avez deja participe a cette activite')
    }else if (!this.verif2()){
      alert('vous netes pas un membre')
    }else{
          nb=nb+1;
         this.actServ.patchProduit(this.id,{nbPart:nb}).subscribe(
          data => this.Activite2.nbPart= this.Activite2.nbPart+1
        )
        let p=new Personne(this.actform.get("id")?.value,this.actform.get("nom")?.value,this.actform.get("prenom")?.value,this.actform.get("dateN")?.value,this.actform.get("adrs")?.value,this.actform.get("email")?.value);
        this.Activite2.participants.push(p);
        this.actServ.updateActivite(this.id,this.Activite2).subscribe (
        data => this.parts.push(p)
        )

      if(this.Activite2.capacite==nb){
            disp=!disp;
            this.actServ.patchProduit(this.id,{disponiblite:disp}).subscribe(
             data => this.Activite2.disponiblite=! this.Activite2.disponiblite
           )
         }

    }
 }



}
