import { LightningElement, track} from 'lwc';

export default class StudentsInforParent extends LightningElement {
name='';
Age='';
rollnumber='';
@track selectedStudentInfo= true;

@track studentsInfoParent=[
{name:'sakshi',  age:27, rollnumber:'101'},
{name:'Sharwani', age:28, rollnumber:'102'},
{name:'Prachi',   age:29, rollnumber:'103'},
{name:'Pranita',  age:30, rollnumber:'104'},
{name:'Shwetali',  age:40, rollnumber:'105'},
];
onTileClickHandler(evt){
   // console.log('on Tile Click Handler: ' +JSON.stringify(evt.detail));
     alert('on Tile Click Handler was called: ' +JSON.stringify(evt.detail));
     this.selectedStudentInfo= evt.detail;
   }
   onChangeHandler(evt){
    const field = evt.target.name;
    this[field] = evt.target.value;

   }
   onClickhandler(){
    this.selectedStudentInfo = true;

   }

}