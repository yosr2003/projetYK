import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../classes/activite';
import { ActivitiesService } from '../serv/activities.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personne } from '../classes/personne';
import { Notif } from '../classes/notif';

@Component({
  selector: 'app-selectedactivity',
  templateUrl: './selectedactivity.component.html',
  styleUrls: ['./selectedactivity.component.css']
})
export class SelectedactivityComponent implements OnInit {
  part:boolean=false;
  Members:Personne[]=[];
  p!:Personne;
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
      cin:[null,[Validators.required, Validators.pattern('[0-9]{8}'), Validators.min(0)]],
      nom:['',[Validators.required,Validators.pattern('[A-Z][a-zA-Z]+$')]],
      prenom:['',[Validators.required,Validators.pattern('[A-Z][a-zA-Z]+$')]],
      dateN:[],
      adrs:[''],
      email:['',[Validators.required, Validators.email]]

    })

  }
  get Cin(){return this.actform.get('cin');}
  get Nom(){return this.actform.get('nom');}
  get Prenom(){return this.actform.get('prenom');}
  get email(){return this.actform.get('email');}
  isValidCin(){
    return this.Cin?.errors?.['pattern']&&this.Cin?.dirty;
  }

  isValidNom(){
    return this.Nom?.errors?.['pattern']&&this.Nom?.dirty;
  }
  isValidPrenom(){
    return this.Prenom?.errors?.['pattern']&&this.Prenom?.dirty;
  }
  
  onResetForm(){
    this.actform.reset();
  
  }
  participer(){
  this.part=!this.part;
  }
  verif(pers:Personne[]):boolean{
    for(let i=0;i<pers.length;i++){
      if(pers[i].cin==this.actform.get("cin")?.value){
        this.p=new Personne(this.actform.get("cin")?.value,pers[i].nom,pers[i].prenom,pers[i].datenaissance,pers[i].adresse,pers[i].email);
        return true
      }
    }
    return false
  }
  onSubmitForm(disp:boolean){
    if(this.verif(this.parts)){
      alert('vous avez deja participe a cette activite')
    }else if (!this.verif(this.Members)){
      alert('vous netes pas un membre')
    }else{
        this.Activite2.nbPart++;
        this.actServ.updateActivite(this.id,this.Activite2).subscribe (
          data => console.log(data))
        // let p=new Personne(this.actform.get("cin")?.value,this.actform.get("nom")?.value,this.actform.get("prenom")?.value,this.actform.get("dateN")?.value,this.actform.get("adrs")?.value,this.actform.get("email")?.value);
        this.Activite2.participants.push(this.p);
        this.actServ.updateActivite(this.id,this.Activite2).subscribe (
        data => this.parts.push(this.p)
        )

      if(this.Activite2.capacite==this.Activite2.nbPart){
            disp=!disp;
            this.actServ.patchActivite(this.id,{disponiblite:disp}).subscribe(
             data => this.Activite2.disponiblite=! this.Activite2.disponiblite
           )
         }
      let notif=new Notif(this.p.cin,this.p.nom,this.p.prenom,this.Activite2.titre);
      this.actServ.addNotif(notif).subscribe(data=>console.log(data));
    }
 }



}
