(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(35),s=a.n(i),r=(a(41),a.p+"static/media/logo.6ce24c58.svg"),l=(a(42),a(5)),j=a(0);var d=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(j.jsx)("p",{children:"SELAMAT DATANG DI APLIKASI INVENTORY"}),Object(j.jsx)(l.b,{to:"/home",children:"Mulai"})]})})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))},o=a(6),h=a(8),O=a(13),u=a(18),m=a(17),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",children:"Inventory"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsx)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"File"}),Object(j.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{className:"dropdown-item",to:"/jenis_produk",children:"Jenis produk"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{className:"dropdown-item",to:"/produk",children:"Produk"})}),Object(j.jsx)("li",{children:Object(j.jsx)("hr",{className:"dropdown-divider"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",children:"Something else here"})})]})]})]})})]})}),Object(j.jsx)("br",{})]})}}]),a}(c.a.Component),x=function e(){Object(h.a)(this,e)};x.BASE_URL2="http://localhost:8000/api/",x.GAMBAR_URL2="http://localhost:8000/foto/",x.BASE_URL="http://www.baktimu.id/laravel/inventory/public/api/",x.GAMBAR_URL="http://www.baktimu.id/laravel/inventory/public/foto/";var f=x,g=a(9),v=a.n(g),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={payload:[],loading:!1},e}return Object(O.a)(a,[{key:"hapus",value:function(e){var t=this;fetch(f.BASE_URL+"jenis_produk",{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){t.load()}))}},{key:"load",value:function(){var e=this;this.setState({loading:!0}),v.a.get(f.BASE_URL+"jenis_produk").then((function(t){console.log(t.data.payload),e.setState({payload:t.data.payload,loading:!1})}))}},{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){var e=this;return this.state.loading?Object(j.jsx)("div",{children:"Loading..."}):Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("h2",{children:"Jenis Produk"}),Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{to:"/add_jenis_produk",className:"btn btn-primary",children:"Tambah"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Nama"}),Object(j.jsx)("th",{children:"Keterangan"}),Object(j.jsx)("th",{children:"Aksi"})]})}),Object(j.jsx)("tbody",{children:this.state.payload.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.nama}),Object(j.jsx)("td",{children:t.keterangan}),Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic outlined example",children:[Object(j.jsx)("button",{type:"button",onClick:function(){return e.hapus(t.id)},className:"btn btn-outline-danger",children:"Hapus"}),Object(j.jsx)(l.b,{to:"/edit_jenis_produk/"+t.id,className:"btn btn-outline-primary",children:"Edit"})]})})]},t.id)}))})]})]})})]})}}]),a}(c.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(p,{})})}}]),a}(c.a.Component),k=a(2),S=a(3),_=a(16),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)("strong",{children:"Loading..."}),Object(j.jsx)("div",{className:"spinner-border ms-auto",role:"status","aria-hidden":"true"})]})})})}}]),a}(c.a.Component);function E(){var e=Object(n.useState)(!1),t=Object(S.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),s=Object(S.a)(i,2),r=s[0],d=s[1],b=Object(_.a)(),o=b.register,h=b.handleSubmit,O=(b.watch,b.formState.errors);return a?Object(j.jsx)(A,{}):Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("h2",{children:"Tambah Jenis Produk"}),Object(j.jsx)("br",{}),Object(j.jsxs)("form",{id:"form",onSubmit:h((function(e){c(!0),console.log(e),v.a.post(f.BASE_URL+"jenis_produk",e).then((function(e){console.log(e.data),0==e.data.status?d(e.data.payload):d(e.data.message),c(!1),document.getElementById("form").reset()}))})),children:[Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({type:"text"},o("nama",{required:!0})),{},{className:"form-control",name:"nama",id:"nama"})),Object(j.jsx)("label",{htmlFor:"nama",children:"Nama jenis produk"})]}),O.nama&&Object(j.jsx)("span",{className:"invalid-feedback",children:"Nama harus diisi"}),Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({type:"text"},o("keterangan",{required:!0})),{},{name:"keterangan",id:"keterangan",className:"form-control"})),Object(j.jsx)("label",{htmlFor:"keterangan",children:"Keterangan"})]}),O.keterangan&&Object(j.jsx)("span",{className:"invalid-feedback",children:"Keterangan harus diisi"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Simpan"}),Object(j.jsx)(l.b,{className:"btn btn-secondary",to:"/jenis_produk",children:"Kembali"})]}),Object(j.jsx)("br",{}),r]})})]})}function T(){var e=Object(_.a)(),t=e.register,a=e.handleSubmit,c=e.setValue,i=(e.watch,e.formState.errors),s=Object(n.useState)(!1),r=Object(S.a)(s,2),d=r[0],b=r[1],h=Object(n.useState)([]),O=Object(S.a)(h,2),u=O[0],m=O[1],x=Object(o.f)(),g=x.id;x.setId;Object(n.useEffect)((function(){fetch(f.BASE_URL+"jenis_produk/detail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:g})}).then((function(e){return e.json()})).then((function(e){c("nama",e.payload.nama),c("keterangan",e.payload.keterangan)}))}),[]);return d?Object(j.jsx)(A,{}):Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("h2",{children:"Edit Jenis Produk"}),Object(j.jsx)("br",{}),Object(j.jsxs)("form",{id:"form",onSubmit:a((function(e){b(!0),fetch(f.BASE_URL+"jenis_produk",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:g,nama:e.nama,keterangan:e.keterangan})}).then((function(e){return e.json()})).then((function(e){console.log(e.message),m(e.message),b(!1)}))})),children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({},t("id",{required:!0})),{},{type:"hidden",value:g})),Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({type:"text"},t("nama",{required:!0})),{},{className:"form-control",name:"nama",id:"nama"})),Object(j.jsx)("label",{htmlFor:"nama",children:"Nama jenis produk"})]}),i.nama&&Object(j.jsx)("span",{className:"invalid-feedback",children:"Nama harus diisi"}),Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({type:"text"},t("keterangan",{required:!0})),{},{name:"keterangan",id:"keterangan",className:"form-control"})),Object(j.jsx)("label",{htmlFor:"keterangan",children:"Keterangan"})]}),i.keterangan&&Object(j.jsx)("span",{className:"invalid-feedback",children:"Keterangan harus diisi"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Update"}),Object(j.jsx)(l.b,{className:"btn btn-secondary",to:"/jenis_produk",children:"Kembali"})]}),Object(j.jsx)("br",{}),u]})})]})}function L(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),s=Object(S.a)(i,2),r=s[0],d=s[1],b=function(){d(!0),v.a.get(f.BASE_URL+"produk").then((function(e){console.log(e.data.payload),c(e.data.payload),d(!1)}))};return Object(n.useEffect)((function(){b()}),[]),r?Object(j.jsx)("div",{children:Object(j.jsx)(A,{})}):Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("h2",{children:"Produk"}),Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{to:"/add_produk",className:"btn btn-primary",children:"Tambah"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Gambar"}),Object(j.jsx)("th",{children:"Nama"}),Object(j.jsx)("th",{children:"Jenis"}),Object(j.jsx)("th",{children:"Satuan"}),Object(j.jsx)("th",{children:"Harga Beli"}),Object(j.jsx)("th",{children:"Aksi"})]})}),Object(j.jsx)("tbody",{children:a.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{alt:"Tidak ada gambar",width:"60",height:"60",src:f.GAMBAR_URL+e.gambar})}),Object(j.jsx)("td",{children:e.nama}),Object(j.jsx)("td",{children:e.jenis}),Object(j.jsx)("td",{children:e.satu}),Object(j.jsx)("td",{style:{"text-align":"right"},children:"Rp. "+e.hbeli.toLocaleString()}),Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic outlined example",children:[Object(j.jsx)("button",{type:"button",onClick:function(){return t=e.id,console.log(t),void fetch(f.BASE_URL+"produk",{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:t})}).then((function(e){b()}));var t},className:"btn btn-outline-danger",children:"Hapus"}),Object(j.jsx)(l.b,{to:"/edit_produk/"+e.id,className:"btn btn-outline-primary",children:"Edit"})]})})]},e.id)}))})]})]})})]})}function B(){var e=Object(_.a)(),t=e.register,a=e.handleSubmit,c=(e.watch,e.formState.errors),i=Object(n.useState)([]),s=Object(S.a)(i,2),r=s[0],d=s[1],b=Object(n.useState)([]),o=Object(S.a)(b,2),h=o[0],O=o[1],u=Object(n.useState)(!1),m=Object(S.a)(u,2),x=m[0],g=m[1],N=Object(n.useState)(""),y=Object(S.a)(N,2),E=y[0],T=y[1],L=Object(n.useState)(""),B=Object(S.a)(L,2),R=B[0],w=(B[1],Object(n.useState)("noimage.png")),q=Object(S.a)(w,2),U=q[0],P=q[1];return Object(n.useEffect)((function(){v.a.get(f.BASE_URL+"jenis_produk").then((function(e){console.log(e.data.payload),d(e.data.payload)})),v.a.get(f.BASE_URL+"satuan").then((function(e){console.log(e.data.payload),O(e.data.payload)}))}),[]),x?Object(j.jsx)(A,{}):Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("h2",{children:"Tambah Produk"}),Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:a((function(e){g(!0);var t=new FormData;t.append("nama",e.nama),t.append("id_jenis",e.id_jenis),t.append("id_satuan",e.id_satuan),t.append("hbeli",e.hbeli),t.append("gambar",U),v.a.post(f.BASE_URL+"produk",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){g(!1),T(e.data.message)}))})),children:[Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({},t("nama",{required:!0})),{},{type:"text",className:"form-control",id:"nama",placeholder:"name@example.com"})),Object(j.jsx)("label",{htmlFor:"nama",children:"Nama produk"})]}),c.nama&&Object(j.jsx)("div",{className:"invalid-feedback",children:"This field is required"}),Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({},t("hbeli",{required:!0})),{},{type:"number",className:"form-control",id:"hbeli"})),Object(j.jsx)("label",{htmlFor:"nama",children:"Harga beli (Rp.)"})]}),c.hbeli&&Object(j.jsx)("span",{children:"This field is required"}),Object(j.jsxs)("div",{className:"form-floating",children:[Object(j.jsxs)("select",Object(k.a)(Object(k.a)({},t("id_jenis",{required:!0})),{},{className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{selected:!0,children:"Pilih salah satu"}),r.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.nama})}))]})),Object(j.jsx)("label",{htmlFor:"floatingSelect",children:"Pilih jenis produk"})]}),c.id_jenis&&Object(j.jsx)("span",{children:"This field is required"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-floating",children:[Object(j.jsxs)("select",Object(k.a)(Object(k.a)({},t("id_satuan",{required:!0})),{},{className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{selected:!0,children:"Pilih salah satu"}),h.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.nama})}))]})),Object(j.jsx)("label",{htmlFor:"floatingSelect",children:"Pilih satuan"})]}),c.id_satuan&&Object(j.jsx)("span",{children:"This field is required"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"input-group",children:Object(j.jsx)("input",Object(k.a)(Object(k.a)({},t("gambar",{required:!1})),{},{type:"file",className:"form-control",id:"gambar",onChange:function(e){P(e.target.files[0])},"aria-describedby":"inputGroupFileAddon04","aria-label":"Upload"}))}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Simpan"}),Object(j.jsx)(l.b,{to:"/produk",className:"btn btn-secondary",children:"Kembali"})]})]}),Object(j.jsx)("br",{}),""==E?Object(j.jsx)("div",{}):Object(j.jsx)("div",{className:"alert alert-success",role:"alert",children:E}),""==R?Object(j.jsx)("div",{}):Object(j.jsx)("div",{className:"alert alert-danger",role:"alert",children:R})]})})]})}function R(){var e=Object(_.a)(),t=e.register,a=e.handleSubmit,c=e.setValue,i=e.formState.errors,s=Object(n.useState)([]),r=Object(S.a)(s,2),d=r[0],b=r[1],h=Object(n.useState)([]),O=Object(S.a)(h,2),u=O[0],m=O[1],x=Object(n.useState)(!1),g=Object(S.a)(x,2),N=g[0],y=g[1],E=Object(n.useState)(""),T=Object(S.a)(E,2),L=T[0],B=T[1],R=Object(n.useState)(""),w=Object(S.a)(R,2),q=(w[0],w[1],Object(o.f)()),U=q.id,P=(q.setId,Object(n.useState)("")),C=Object(S.a)(P,2),F=C[0],D=C[1];Object(n.useEffect)((function(){J(),I(),fetch(f.BASE_URL+"produk/detail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:U})}).then((function(e){return e.json()})).then((function(e){c("nama",e.payload.nama),c("id_jenis",e.payload.id_jenis),c("id_satuan",e.payload.id_satuan),c("hbeli",e.payload.hbeli),D(f.GAMBAR_URL+e.payload.gambar)}))}),[]);var J=function(){v.a.get(f.BASE_URL+"jenis_produk").then((function(e){console.log(e.data.payload),b(e.data.payload)}))},I=function(){v.a.get(f.BASE_URL+"satuan").then((function(e){console.log(e.data.payload),m(e.data.payload)}))};return N?Object(j.jsx)(A,{}):Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("h2",{children:"Edit Produk"}),Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:a((function(e){y(!0);var t=new FormData;t.append("id",U),t.append("nama",e.nama),t.append("id_jenis",e.id_jenis),t.append("id_satuan",e.id_satuan),t.append("hbeli",e.hbeli),t.append("gambar",F),v.a.post(f.BASE_URL+"produk/edit",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){B(e.data.message),y(!1)}))})),children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({},t("id",{required:!0})),{},{type:"hidden",value:U})),Object(j.jsx)("center",{children:Object(j.jsx)("img",{width:"150",height:"150",src:F,className:"img-thumbnail",alt:"Tidak ada gambar"})}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({},t("nama",{required:!0})),{},{type:"text",className:"form-control",id:"nama",placeholder:"name@example.com"})),Object(j.jsx)("label",{htmlFor:"nama",children:"Nama produk"})]}),i.nama&&Object(j.jsx)("div",{className:"invalid-feedback",children:"This field is required"}),Object(j.jsxs)("div",{className:"form-floating mb-3",children:[Object(j.jsx)("input",Object(k.a)(Object(k.a)({},t("hbeli",{required:!0})),{},{type:"number",className:"form-control",id:"hbeli"})),Object(j.jsx)("label",{htmlFor:"nama",children:"Harga beli (Rp.)"})]}),i.hbeli&&Object(j.jsx)("span",{children:"This field is required"}),Object(j.jsxs)("div",{className:"form-floating",children:[Object(j.jsxs)("select",Object(k.a)(Object(k.a)({},t("id_jenis",{required:!0})),{},{className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{selected:!0,children:"Pilih salah satu"}),d.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.nama})}))]})),Object(j.jsx)("label",{htmlFor:"floatingSelect",children:"Pilih jenis produk"})]}),i.id_jenis&&Object(j.jsx)("span",{children:"This field is required"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-floating",children:[Object(j.jsxs)("select",Object(k.a)(Object(k.a)({},t("id_satuan",{required:!0})),{},{className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{selected:!0,children:"Pilih salah satu"}),u.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.nama})}))]})),Object(j.jsx)("label",{htmlFor:"floatingSelect",children:"Pilih satuan"})]}),i.id_satuan&&Object(j.jsx)("span",{children:"This field is required"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Simpan"}),Object(j.jsx)(l.b,{to:"/produk",className:"btn btn-secondary",children:"Kembali"})]})]}),Object(j.jsx)("br",{}),""==L?Object(j.jsx)("div",{}):Object(j.jsx)("div",{className:"alert alert-success",role:"alert",children:L})]})})]})}s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(l.a,{basename:"/react/inventory",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(d,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/produk",children:Object(j.jsx)(L,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/add_produk",children:Object(j.jsx)(B,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/edit_produk/:id",children:Object(j.jsx)(R,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/jenis_produk",children:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/home",children:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/add_jenis_produk",children:Object(j.jsx)(E,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/edit_jenis_produk/:id",children:Object(j.jsx)(T,{})})]})})}),document.getElementById("root")),b()}},[[71,1,2]]]);
//# sourceMappingURL=main.aba8125c.chunk.js.map