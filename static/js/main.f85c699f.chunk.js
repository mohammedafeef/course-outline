(this["webpackJsonpcourse-outline"]=this["webpackJsonpcourse-outline"]||[]).push([[0],{11:function(e,t,a){e.exports={formContainer:"styles_formContainer__2erOw",coverPageWrapper:"styles_coverPageWrapper__2C_td",sectiontHeading:"styles_sectiontHeading__3B3W4",fieldList:"styles_fieldList__2AW46",fieldListItem:"styles_fieldListItem__cjpHU",btnContainer:"styles_btnContainer__3gx_k",customBtn:"styles_customBtn__3OlYd",btnIcon:"styles_btnIcon__UMP0U",coverImageContainer:"styles_coverImageContainer__DYKNA",emeaLogo:"styles_emeaLogo__1jwjU",courseDetails:"styles_courseDetails__oTexL",courseTime:"styles_courseTime__3rcGU",courseHeading:"styles_courseHeading__10gS6",courseInfo:"styles_courseInfo__2BIyJ",courseTitleSection:"styles_courseTitleSection__XCz-H",previewSectiontHeading:"styles_previewSectiontHeading__3C2Jx",tableCell:"styles_tableCell__oJ-1O",headingTable:"styles_headingTable__2pZQa",courseName:"styles_courseName__2k5iS",majorTitle:"styles_majorTitle__2OmX4",attributesContainer:"styles_attributesContainer__1JACY",innerListContainer:"styles_innerListContainer__2vVtY"}},139:function(e,t,a){},140:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(45),s=a.n(c),l=(a(139),a(14)),i=a(111),o=a(17),d=(a(140),a(225)),u=a(16),j=a(4),m=a(19),b=a(210),h=a(204),x=a(208),O=a(211),p=a(201),g=a(0);function f(e){var t=e.changeHandler,a=e.name,n=e.selectedValue,r=e.label,c=e.values;return Object(g.jsx)(b.a,{sx:{minWidth:120},children:Object(g.jsxs)(O.a,{fullWidth:!0,children:[Object(g.jsx)(h.a,{id:a,children:r}),Object(g.jsx)(p.a,{labelId:a,id:"demo-simple-select",value:n,label:r,name:a,onChange:t,children:c.map((function(e){return Object(g.jsx)(x.a,{value:e,children:e})}))})]})})}var v=a(205);function C(e){return Object(g.jsx)(b.a,{sx:{maxWidth:"100%"},children:Object(g.jsx)(v.a,{fullWidth:!0,label:e.label,id:e.id,placeholder:e.placeholder,multiline:e.multiline,rows:e.rows,name:e.name,value:e.value,onChange:e.onChange})})}var y=a(154),N=a(216),w=a(203);function T(e){var t=e.name,a=e.values,n=e.changeHandler,r=e.selectedValue;return Object(g.jsx)(y.a,{children:a.map((function(e){return Object(g.jsx)(N.a,{control:Object(g.jsx)(w.a,{onChange:n,name:t,value:e,checked:r.includes(e)}),label:e})}))})}var k=a(209),_=a(217),S=a(212),E=a(218),I=a(219),A=a(220),M=a(221),q=a(222);function L(e){var t=e.cols,a=e.rows;return Object(g.jsx)(k.a,{container:!0,item:!0,direction:"row",children:Object(g.jsx)(k.a,{container:!0,item:!0,children:Object(g.jsx)(k.a,{sm:12,children:Object(g.jsx)(_.a,{component:S.a,children:Object(g.jsxs)(E.a,{sx:{minWidth:500},"aria-label":"simple table",children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(A.a,{children:t.map((function(e){return Object(g.jsx)(M.a,{children:e})}))})}),Object(g.jsx)(q.a,{children:a.map((function(e){return Object(g.jsxs)(A.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(g.jsx)(M.a,{component:"th",scope:"row",children:e.items}),Object(g.jsx)(M.a,{children:e.mark20}),Object(g.jsx)(M.a,{children:e.mark15})]},e.items)}))})]})})})})})}var P=a(202),D=a(196);function Q(e){var t=e.radiovalue,a=e.value,n=function(e){t(e.target.value)};return Object(g.jsx)(O.a,{component:"fieldset",children:Object(g.jsxs)(D.a,{row:!0,"aria-label":"externalExamMark",name:"row-radio-buttons-group",children:[Object(g.jsx)(N.a,{onChange:function(e){return n(e)},value:"rows80",control:Object(g.jsx)(P.a,{}),label:"Total Mark 80",checked:"rows80"===a}),Object(g.jsx)(N.a,{onChange:function(e){return n(e)},value:"rows60",control:Object(g.jsx)(P.a,{}),label:"Total Mark 60",checked:"rows60"===a})]})})}function H(e){var t=Object(n.useState)("rows80"),a=Object(l.a)(t,2),r=a[0],c=a[1],s=e.cols,i=e.rows60,o=e.rows80,d=e.changeHandler;return Object(g.jsxs)(k.a,{item:!0,sm:12,children:[Object(g.jsx)(Q,{value:r,radiovalue:function(e){c(e),d(e)}}),Object(g.jsx)(_.a,{component:S.a,children:Object(g.jsxs)(E.a,{sx:{minWidth:500},"aria-label":"simple table",children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(A.a,{children:s.map((function(e){return Object(g.jsx)(M.a,{children:e})}))})}),"rows60"===r?Object(g.jsx)(q.a,{children:i.map((function(e){return Object(g.jsxs)(A.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(g.jsx)(M.a,{component:"th",scope:"row",children:e.questionType}),Object(g.jsx)(M.a,{children:e.noQuestion}),Object(g.jsx)(M.a,{children:e.mQ}),Object(g.jsx)(M.a,{children:e.totalMarks})]},e.items)}))}):Object(g.jsx)(q.a,{children:o.map((function(e){return Object(g.jsxs)(A.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(g.jsx)(M.a,{component:"th",scope:"row",children:e.questionType}),Object(g.jsx)(M.a,{children:e.noQuestion}),Object(g.jsx)(M.a,{children:e.mQ}),Object(g.jsx)(M.a,{children:e.totalMarks})]},e.items)}))})]})})]})}var B=a(223),W=a(213),F=a(206),Y=a(199),R=a(106),V=a.n(R),U=a(107),J=a.n(U),G=a(200);function X(e){var t=e.addMoreHandler,a=e.addedPortion,r=Object(n.useState)({}),c=Object(l.a)(r,2),s=c[0],i=c[1],o=function(e){i(Object(m.a)(Object(m.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(g.jsxs)(k.a,{container:!0,direction:"row",spacing:2,children:[a.length?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k.a,{item:!0,container:!0,spacing:2,children:Object(g.jsx)(k.a,{item:!0,sm:8,children:Object(g.jsx)("h4",{style:{margin:"0"},children:"Portions Covered"})})}),Object(g.jsx)(E.a,{children:a.map((function(e){return Object(g.jsxs)(A.a,{children:[Object(g.jsx)(M.a,{children:Object(g.jsx)("p",{children:e.discribtion})}),Object(g.jsx)(M.a,{children:Object(g.jsx)("h4",{children:e.duration})})]})}))})]}):null,Object(g.jsxs)(k.a,{item:!0,container:!0,spacing:2,children:[Object(g.jsx)(k.a,{item:!0,sm:8,children:Object(g.jsx)(v.a,{fullWidth:!0,label:"Portion Covered",rows:"4",multiline:!0,name:"discribtion",value:s.discribtion,onChange:o})}),Object(g.jsx)(k.a,{item:!0,sm:4,children:Object(g.jsxs)(O.a,{fullWidth:!0,children:[Object(g.jsx)(h.a,{id:"course-outline",children:"Select Week"}),Object(g.jsx)(p.a,{labelId:"course-outline",id:"demo-simple-select",value:s.duration,label:"Select Week",name:"duration",onChange:o,children:Array.from({length:18},(function(e,t){return t+1})).map((function(e){return Object(g.jsxs)(x.a,{value:"week ".concat(e),children:["week ",e]})}))})]})})]}),Object(g.jsx)(k.a,{item:!0,container:!0,children:Object(g.jsx)(B.a,{variant:"contained",disabled:!s.discribtion||!s.duration,onClick:function(){var e,a=Object(m.a)({},s);t(a),e=a.duration,i({discribtion:"",duration:e})},style:{marginLeft:"auto"},children:"Add More"})})]})}var z=a(197),K=a(198),Z=a(224),$=a(103),ee=a.n($),te=a(104),ae=a.n(te);function ne(e){var t=e.textChangeHandler,a=e.checkBoxChangeHandler,r=e.courseOutline,c=e.fieldValues,s=Object(n.useState)({}),i=Object(l.a)(s,2),o=i[0],d=i[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k.a,{item:!0,sm:3,children:"".concat(c.subTitle," ").concat(c.required?"*":"")}),Object(g.jsxs)(k.a,{item:!0,sm:9,children:[Object(g.jsx)(C,{label:"Name of the course",name:"gradutesAttributeCourseName",onChange:t,value:r.gradutesAttributeCourseName}),Object(g.jsx)(W.a,{children:Object.keys(c.collapse).map((function(e){var t;return c.collapse[e].length?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(z.a,{style:{width:"60%"},children:[Object(g.jsx)(K.a,{primary:e,onClick:function(){return t=e,d(Object(m.a)(Object(m.a)({},o),{},Object(j.a)({},t,!o[t]||!o[t])));var t}}),o[e]?Object(g.jsx)(ee.a,{}):Object(g.jsx)(ae.a,{})]}),Object(g.jsx)(Z.a,{in:o[e],timeout:"auto",unmountOnExit:!0,style:{paddingLeft:"30px"},children:Object(g.jsx)(T,{changeHandler:a,name:e,selectedValue:r[e]||[],values:c.collapse[e]||[]})})]}):Object(g.jsx)(N.a,{control:Object(g.jsx)(w.a,{onChange:a,name:e,value:e,checked:null===(t=r[e])||void 0===t?void 0:t.includes(e)}),label:e,style:{paddingLeft:"15px"}})}))})]})]})}function re(e){return Object(g.jsxs)(b.a,{sx:{maxWidth:"100%",textAlign:"right"},children:[Object(g.jsx)(v.a,{fullWidth:!0,label:e.label,id:e.id,placeholder:e.placeholder,multiline:!0,rows:"3",name:e.name,value:e.value,onChange:e.onChange}),e.sample&&Object(g.jsx)(G.a,{disableFocusListener:!0,title:e.sample,children:Object(g.jsx)(B.a,{children:"sample"})})]})}var ce=["First","Second","Third","Fourth","Fifth","Sixth"],se=["Items","Mark 20","Mark 15"],le=[{title:"Name of the Stream",name:"courseStream",label:"Select Course Stream",type:"select",values:["Commerce and Management","Humanities and Social Science","Science","Physical Education","B.voc"],required:!0},{title:"Name of the Programme",name:"programmeName",type:"text",label:"Programme Name",required:!0},{title:"Name of the Course",name:"courseName",type:"text",label:"Course Name",required:!0},{title:"Year",name:"year",label:"Select Year",type:"select",values:function(){var e=(new Date).getFullYear()-3;return Object(u.a)(Array(6).keys()).map((function(t){return"".concat(e+t,"-").concat(e+t+1)}))}(),required:!0},{title:"Semester",name:"semester",label:"Select Semester",type:"select",required:!0,values:ce},{title:"Nature of the Course ",name:"courseNature",label:"Select Course Nature",type:"select",values:["Common course","Core course","Complimentry course","Open course"]},{title:"Lecturer(s)",name:"lecture",type:"textArea",label:"Lecturer Name"},{title:"Coordinator Name",name:"coordinatorName",type:"textArea",label:"Coordinator Name "},{title:"No of Credits ",name:"noCredits",type:"text",label:"No of Credits "},{title:"No of Contact Hours ",name:"noContactHours",type:"text",label:"No of Contact Hours "},{title:"Course Description ",name:"courseDescription",type:"textArea",sample:'This course introduce students to literary texts and their unique conventions and contours-the linguistic, the social, the cultural and the political. The course is more of a search for the "why\u201d and \u201chow\u201d rather than the \u201cwhat\u201d of literature.\n\n Creative texts are analysed organically in participatory classrooms with teachers and students dialoguing with the text',label:"Course Description"},{title:"Course Objectives ",name:"courseObjectives",type:"textArea",label:"Course Objectives"},{title:"Course Outcome ",name:"courseOutcome",type:"textArea",label:"Course Outcome"},{title:"Assessment Method",name:"assessmentMethod",type:"checkbox",label:"Assessment Method",values:["Assignments","Homeworks","Class Tests","Unit Tests","Practical Tests","Term Exam","Seminars","Lab Experiments"]},{title:"Text Book",name:"textBook",type:"textArea",label:"Text Book"},{title:"References",name:"references",type:"textArea",label:"References"},{title:"Internet Resources",name:"internetResources",type:"text",label:"Internet Resources"}],ie=[{subTitle:"External",type:"tableExternal",cols:["Question Type","No of Question","Mark/Question","Total Marks"],rows60:[{questionType:"Short Questions(2-3 Sentences)",noQuestion:"12",mQ:"2",totalMarks:"Ceiling 20"},{questionType:"Paragraph / Problem Type",noQuestion:"7",mQ:"5",totalMarks:"Ceiling 30"},{questionType:"Essay Type",noQuestion:"2 out of 4",mQ:"10",totalMarks:"10"},{questionType:"Total",noQuestion:" ",mQ:" ",totalMarks:"60"},{questionType:"Time",noQuestion:" ",mQ:" ",totalMarks:"2 hrs"}],rows80:[{questionType:"Short Questions(2-3 Sentences)",noQuestion:"15",mQ:"2",totalMarks:"Ceiling 25"},{questionType:"Paragraph / Problem Type",noQuestion:"8",mQ:"5",totalMarks:"Ceiling 35"},{questionType:"Essay Type",noQuestion:"2 out of 4",mQ:"10",totalMarks:"10"},{questionType:"Total",noQuestion:" ",mQ:" ",totalMarks:"80"},{questionType:"Time",noQuestion:" ",mQ:" ",totalMarks:"2.5 hrs"}],name:"ExternalTable"},{subTitle:"Graduate Attributes",type:"graduateAttributes",name:"gradutesAttributeCourseName",label:"Graduates Attributes",collapse:{Knowledge:[],"Acedemic and Intelictual Skill":["Self Learning","Collaberative Learning","Cognitive Skills"],"Professional Skills":["Communication Skills","Teamwork and leadership","Decision Making","Critical and aneletical Skills","IT Skills","Cross cultural skills","Problem Solving Skills","Research Skills","Enterpruenur Aptitude"],"Personal Skills":["Creative Thinking","Lifelong learning","Application Skills","life Skills"],"Aptitude and Values":["Social Responcipility","Ethical commitment","Global Citizen","Nation Building","Secular Outlook"]},values:["knowledge","personal skill"]}],oe=[{mainTitle:"Course schedule",name:"courseSchedule",type:"courseSchedule",required:!0,label:"Course Schedule"}],de=[{title:"Name",name:"name",type:"text",label:"Enter Your Name",required:!0},{title:"Phone",name:"phone",type:"text",label:"Enter Your Phone",required:!0},{title:"Email",name:"email",type:"text",label:"Enter Your Email"},{title:"Website",name:"website",type:"text",label:"Enter Your Website url"}],ue=[{heading:"Course Details",fields:le},{heading:"Internal Exam Pattern",fields:[{subTitle:"Internal",type:"tableInternal",cols:se,rows:[{items:"Assignment",mark20:"4",mark15:"3"},{items:"Test Paper(s)/Viva voce",mark20:"8",mark15:"6"},{items:"Seminar/Presentation",mark20:"4",mark15:"3"},{items:"Class Room Particpation based on Attendance",mark20:"4",mark15:"3"},{items:"Total",mark20:"20",mark15:"15"}],name:"InternalTable"}],innerTable:!0},{heading:"External Exam Pattern",fields:ie,innerTable:!0},{heading:"Course Schedule",fields:oe,innerTable:!0,required:!0},{heading:"Contact Details",fields:de}],je=[].concat(le,se,ie,oe,de),me=ue,be=a(11),he=a.n(be),xe=function(e){var t=e.setPreviewData,a=e.previewData,r=Object(n.useState)(a),c=Object(l.a)(r,2),s=c[0],i=c[1],d=Object(n.useState)(!0),b=Object(l.a)(d,2),h=b[0],x=b[1];Object(n.useEffect)((function(){x(!!je.find((function(e){return e.required&&!s[e.name]})))}),[s]);var O=Object(o.f)(),p=function(e){i(Object(m.a)(Object(m.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))},v=function(e){return i(Object(m.a)(Object(m.a)({},s),{},{courseSchedule:s.courseSchedule?[].concat(Object(u.a)(s.courseSchedule),[e]):[e]}))},y=function(e){i(s[e.target.name]?Object(m.a)(Object(m.a)({},s),{},Object(j.a)({},e.target.name,s[e.target.name].includes(e.target.value)?s[e.target.name].filter((function(t){return t!==e.target.value})):[].concat(Object(u.a)(s[e.target.name]),[e.target.value]))):Object(m.a)(Object(m.a)({},s),{},Object(j.a)({},e.target.name,[e.target.value])))},N=function(e){return i(Object(m.a)(Object(m.a)({},s),{},{ExternalTable:e}))},w=function(e){switch(e.type){case"text":return Object(g.jsx)(C,{label:e.label||"",name:e.name,onChange:p,value:s[e.name],required:"".concat(e.title).concat(e.required?"*":"")});case"textArea":return Object(g.jsx)(re,{label:e.label||"",onChange:p,name:e.name,value:s[e.name],required:"".concat(e.title).concat(e.required?"*":""),sample:e.sample||""});case"select":return Object(g.jsx)(f,{changeHandler:p,name:e.name,label:e.label,selectedValue:s[e.name],values:e.values,required:e.required});case"checkbox":return Object(g.jsx)(T,{changeHandler:y,name:e.name,label:e.label,selectedValue:s[e.name]||[],values:e.values,required:e.required});case"tableInternal":return Object(g.jsx)(L,{name:e.name,cols:e.cols,rows:e.rows,changeHandler:p,selectedValue:s[e.name]});case"tableExternal":return Object(g.jsx)(H,{name:e.name,cols:e.cols,rows60:e.rows60,rows80:e.rows80,changeHandler:N,selectedValue:s[e.name]});case"courseSchedule":return Object(g.jsx)(X,{addMoreHandler:v,addedPortion:s.courseSchedule||[]});case"graduateAttributes":return Object(g.jsx)(ne,{textChangeHandler:p,checkBoxChangeHandler:y,courseOutline:s,fieldValues:e});default:return}};return Object(g.jsxs)(S.a,{elevation:4,className:he.a.formContainer,children:[me.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{className:he.a.sectiontHeading,children:"".concat(e.heading," ").concat(e.required?"*":"")}),Object(g.jsx)(W.a,{sx:he.a,component:"ul",className:he.a.fieldList,children:e.fields.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(F.a,{className:he.a.fieldListItem,children:Object(g.jsx)(k.a,{container:!0,children:e.title?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k.a,{item:!0,sm:3,children:"".concat(e.title," ").concat(e.required?"*":"")}),Object(g.jsx)(k.a,{item:!0,sm:9,children:w(e)})]}):w(e)})}),Object(g.jsx)(Y.a,{})]})}))})]})})),Object(g.jsxs)("div",{class:he.a.btnContainer,children:[Object(g.jsx)(G.a,{title:h?"Fill * fields to enable preview":"Show your word document model",children:Object(g.jsx)("span",{children:Object(g.jsxs)(B.a,{variant:"contained",className:he.a.customBtn,onClick:function(e){t(Object(m.a)(Object(m.a)({},s),{},{InternalTable:"created",ExternalTable:s.ExternalTable||"rows80"})),O.push("/preview")},disabled:h,children:[Object(g.jsx)(V.a,{className:he.a.btnIcon}),"Preview"]})})}),Object(g.jsx)(G.a,{disableFocusListener:!0,title:"Clear all input field",children:Object(g.jsxs)(B.a,{variant:"contained",color:"error",className:he.a.customBtn,onClick:function(){O.go(0),document.body.scrollTop=document.documentElement.scrollTop=0},children:[Object(g.jsx)(J.a,{className:he.a.btnIcon}),"Reset"]})})]})]})},Oe=a(110),pe=a.n(Oe),ge=a(109),fe=a.n(ge);function ve(e){var t=e.cols,a=e.rows,n=e.type;return Object(g.jsx)(k.a,{container:!0,item:!0,direction:"row",children:Object(g.jsx)(k.a,{container:!0,item:!0,children:Object(g.jsx)(k.a,{sm:12,children:Object(g.jsx)(_.a,{children:Object(g.jsxs)(E.a,{sx:{minWidth:500},"aria-label":"simple table",border:"1",width:"100%",cellpadding:"15",children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(A.a,{children:t.map((function(e){return Object(g.jsx)(M.a,{className:he.a.tableCell,children:e})}))})}),Object(g.jsx)(q.a,{children:"internal"===n?a.map((function(e){return Object(g.jsxs)(A.a,{children:[Object(g.jsx)(M.a,{className:he.a.tableCell,children:e.items}),Object(g.jsx)(M.a,{className:he.a.tableCell,children:e.mark20}),Object(g.jsx)(M.a,{className:he.a.tableCell,children:e.mark15})]},e.items)})):a.map((function(e){return Object(g.jsxs)(A.a,{children:[Object(g.jsx)(M.a,{className:he.a.tableCell,children:e.questionType}),Object(g.jsx)(M.a,{className:he.a.tableCell,children:e.noQuestion}),Object(g.jsx)(M.a,{className:he.a.tableCell,children:e.mQ}),Object(g.jsx)(M.a,{className:he.a.tableCell,children:e.totalMarks})]},e.items)}))})]})})})})})}function Ce(e){var t=e.courseName,a=e.previewData,n=e.field;return Object(g.jsx)(k.a,{container:!0,item:!0,direction:"row",children:Object(g.jsx)(k.a,{container:!0,item:!0,children:Object(g.jsx)(k.a,{sm:12,children:Object(g.jsx)(_.a,{children:Object(g.jsx)(E.a,{border:"1",width:"100%",cellpadding:"15",children:Object(g.jsx)(q.a,{children:Object(g.jsxs)(A.a,{children:[Object(g.jsx)(M.a,{className:"".concat(he.a.tableCell," ").concat(he.a.headingTable),children:"Graduates Attributes"}),Object(g.jsxs)(M.a,{className:he.a.tableCell,children:[Object(g.jsx)("h3",{className:he.a.courseName,children:"Course Name:"}),Object(g.jsx)("h5",{className:he.a.majorTitle,children:t}),Object(g.jsx)(W.a,{className:he.a.attributesContainer,children:Object.keys(n.collapse).map((function(e){var t;return(null===(t=a[e])||void 0===t?void 0:t.length)?Object(g.jsxs)(F.a,{className:he.a.innerListContainer,children:[Object(g.jsx)("h5",{className:he.a.majorTitle,children:e}),n.collapse[e].length?Object(g.jsx)(W.a,{children:a[e].map((function(e){return Object(g.jsx)(F.a,{children:e})}))}):null]}):null}))})]})]},t)})})})})})})}function ye(e){var t=e.coveredPortions;return Object(g.jsx)(k.a,{container:!0,item:!0,direction:"row",children:Object(g.jsx)(k.a,{container:!0,item:!0,children:Object(g.jsx)(k.a,{sm:12,children:Object(g.jsx)(_.a,{children:Object(g.jsxs)(E.a,{border:"1",width:"100%",cellpadding:"15",children:[Object(g.jsx)(I.a,{children:Object(g.jsxs)(A.a,{children:[Object(g.jsx)(M.a,{className:he.a.tableCell,children:Object(g.jsx)("h4",{style:{margin:"0"},children:"Discribtion"})}),Object(g.jsx)(M.a,{className:he.a.tableCell,children:Object(g.jsx)("h4",{style:{margin:"0"},children:"Duration"})})]})}),Object(g.jsx)(q.a,{children:t.map((function(e){return Object(g.jsxs)(A.a,{children:[Object(g.jsx)(M.a,{className:"".concat(he.a.tableCell," ").concat(he.a.headingTable),children:Object(g.jsx)("h5",{style:{margin:"0",fontWeight:"500",fontSize:"15px"},children:e.discribtion})}),Object(g.jsx)(M.a,{className:he.a.tableCell,children:Object(g.jsx)("h5",{style:{margin:"0",fontWeight:"500",fontSize:"15px"},children:e.duration})})]},e.discribtion)}))})]})})})})})}var Ne=a.p+"static/media/emeaLogo.a80fd41e.png",we=a(108),Te=a.n(we),ke=a(77),_e=a.n(ke);function Se(e){var t,a=e.previewData,n=Object(o.f)(),r=function(e){var t;switch(e.type){case"text":return Object(g.jsx)("span",{className:he.a.textData,children:a[e.name]});case"textArea":return Object(g.jsx)("span",{className:he.a.textAreaData,children:a[e.name]});case"select":return Object(g.jsx)("span",{className:he.a.selectBoxData,children:a[e.name]});case"checkbox":return Object(g.jsx)(W.a,{children:null===(t=a[e.name])||void 0===t?void 0:t.map((function(e){return Object(g.jsx)(F.a,{children:e})}))});case"tableInternal":return Object(g.jsx)(ve,{name:e.name,cols:e.cols,rows:e.rows,type:"internal"});case"tableExternal":return Object(g.jsx)(ve,{name:e.name,cols:e.cols,type:"external",rows:e[a[e.name]]});case"courseSchedule":return Object(g.jsx)(ye,{coveredPortions:a.courseSchedule});case"graduateAttributes":return Object(g.jsx)(Ce,{courseName:a.gradutesAttributeCourseName,previewData:a,field:e});default:return}};return Object(g.jsxs)(S.a,{elevation:4,className:he.a.formContainer,children:[Object(g.jsx)("div",{className:he.a.coverPageWrapper,children:Object(g.jsxs)("div",{id:"coverImage",className:he.a.coverImageContainer,children:[Object(g.jsx)("div",{className:he.a.imgContainer,children:Object(g.jsx)("img",{className:he.a.emeaLogo,src:Ne,alt:"emeaLogo"})}),Object(g.jsxs)("div",{className:he.a.courseDetails,children:[Object(g.jsxs)("div",{className:he.a.courseTime,children:[Object(g.jsxs)("span",{className:he.a.semType,children:[ce.indexOf(a.semester||0)%2===1?"Even":"Odd"," ","Sem"]}),Object(g.jsx)("span",{className:he.a.courseYear,children:null===(t=a.year)||void 0===t?void 0:t.split("-")[0]})]}),Object(g.jsxs)("div",{className:he.a.courseHeading,children:[Object(g.jsx)("span",{children:a.programmeName||"Programe name"}),Object(g.jsx)("span",{children:a.courseStream||"Course Stream"})]})]}),Object(g.jsx)("div",{className:he.a.courseInfo,children:"Dear students: course outline is indented to provide students with the overall plan for the course to enable them function efficiently and effectively in the course."})]})}),Object(g.jsxs)("div",{id:"docWrapper",children:[Object(g.jsxs)("h1",{className:he.a.courseTitleSection,children:[a.courseName||"Course outline"," (",a.year||"2020 - 2021",")"]}),me.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h2",{className:he.a.previewSectiontHeading,children:e.heading}),Object(g.jsx)(E.a,{sx:he.a,className:he.a.fieldList,style:{border:"1px solid rgba(224, 224, 224, 1) !important"},border:e.innerTable?"0":"1",width:"100%",cellpadding:e.innerTable?"0":"15",children:Object(g.jsx)(q.a,{children:e.fields.map((function(e){return Object(g.jsx)(g.Fragment,{children:a[e.name]&&Object(g.jsx)(A.a,{className:he.a.fieldListItem,children:e.title?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(M.a,{className:"".concat(he.a.tableCell," ").concat(he.a.headingTable),children:Object(g.jsx)("h4",{className:he.a.colTitle,children:e.title})}),Object(g.jsx)(M.a,{className:he.a.tableCell,children:r(e)})]}):r(e)})})}))})})]})}))]}),Object(g.jsxs)("div",{class:he.a.btnContainer,children:[Object(g.jsx)(G.a,{disableFocusListener:!0,title:"Go back to form",children:Object(g.jsxs)(B.a,{variant:"contained",className:he.a.customBtn,onClick:function(){return n.push("/home")},children:[Object(g.jsx)(fe.a,{className:he.a.btnIcon}),"Back"]})}),Object(g.jsx)(G.a,{disableFocusListener:!0,title:"export the dcument to word",children:Object(g.jsxs)(B.a,{variant:"contained",className:he.a.customBtn,color:"success",onClick:function(){var e=document.getElementById("coverImage");Te.a.toJpeg(e).then((function(e){var t=new Image;t.src=e,document.getElementById("docWrapper").prepend(t),function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"courseOutline",a="Mime-Version: 1.0\nContent-Base: "+window.location.href+'\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: '+window.location.href+"\n\n<!DOCTYPE html>\n<html>\n_html_</html>",n='<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n_styles_\n</style>\n</head>\n',r=document.getElementById(e).innerHTML,c=new Blob(["\ufeff",r],{type:"application/msword"}),s="<style>img {width:300px;}table {border-collapse: collapse; border-spacing: 0;}td{padding: 6px;}</style>",l={maxWidth:624},i=[],o=_e()("#"+e).find("img"),d=0;d<o.length;d++){var u=Math.min(o[d].width,l.maxWidth),j=o[d].height*(u/o[d].width),m=document.createElement("CANVAS");m.width=u,m.height=j,m.getContext("2d").drawImage(o[d],0,0,u,j);var b=m.toDataURL("image/png");_e()(o[d]).attr("src",o[d].src),o[d].width=u,o[d].height=j,i[d]={type:b.substring(b.indexOf(":")+1,b.indexOf(";")),encoding:b.substring(b.indexOf(";")+1,b.indexOf(",")),location:_e()(o[d]).attr("src"),data:b.substring(b.indexOf(",")+1)}}for(var h="\n",x=0;x<i.length;x++)h+="--NEXT.ITEM-BOUNDARY\n",h+="Content-Location: "+i[x].location+"\n",h+="Content-Type: "+i[x].type+"\n",h+="Content-Transfer-Encoding: "+i[x].encoding+"\n\n",h+=i[x].data+"\n\n";h+="--NEXT.ITEM-BOUNDARY--";var O=a.replace("_html_",n.replace("_styles_",s)+r)+h,p="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(O);t=t?t+".doc":"document.doc";var g=document.createElement("a");document.body.appendChild(g),navigator.msSaveOrOpenBlob?navigator.msSaveOrOpenBlob(c,t):(g.href=p,g.download=t,g.click()),document.body.removeChild(g)}("docWrapper",a.programmeName),n.push("/home"),n.go(0)})).catch((function(e){console.error("oops, something went wrong!",e)}))},children:[Object(g.jsx)(pe.a,{className:he.a.btnIcon}),"Export"]})})]})]})}var Ee=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(g.jsx)(i.a,{children:Object(g.jsx)(o.c,{children:Object(g.jsx)("div",{className:"appContainer",children:Object(g.jsxs)(d.a,{className:"formWrapper",children:[Object(g.jsxs)("div",{className:"appTitle",children:[Object(g.jsx)("h1",{className:"pageTitle",children:"Course Outline"}),Object(g.jsx)("span",{className:"subTitle",children:"EMEA College of Arts and Science"})]}),Object(g.jsx)(o.a,{exact:!0,path:"/",component:function(){return Object(g.jsx)(xe,{previewData:a,setPreviewData:r})}}),Object(g.jsx)(o.a,{exact:!0,path:"/home",component:function(){return Object(g.jsx)(xe,{previewData:a,setPreviewData:r})}}),Object(g.jsx)(o.a,{exact:!0,path:"/preview",component:function(){return Object(g.jsx)(Se,{previewData:a})}})]})})})})},Ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Ee,{})}),document.getElementById("root")),Ie()}},[[148,1,2]]]);
//# sourceMappingURL=main.f85c699f.chunk.js.map