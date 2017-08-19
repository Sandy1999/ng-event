import { Directive , Inject , OnInit , ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({ selector: '[modal-trigger]'})
export class ModelTriggerDirective {
    el:HTMLElement
    constructor(private ref:ElementRef , @Inject(JQ_TOKEN) private $:any) { 
        this.el = ref.nativeElement
    }
    ngOnInit(){
        this.el.addEventListener('click', e=>{
             this.$('#simple-modal').modal({})
        })
    }
}