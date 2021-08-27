import React, {useState} from "react";
import axios from "axios";
import Nav from "../komponen/Nav";
import {  useForm, SubmitHandler } from "react-hook-form";
import Endpoint from "../config/Endpoint";
import {Link} from "react-router-dom";
import Loading from "../komponen/Loading";

export default function  AddJenisProduk() {

    const [load, setLoad] = useState(false)
    const [gagal, setGagal] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoad(true)
        console.log(data)
        axios.post(Endpoint.BASE_URL + `jenis_produk`,  data )
            .then(res => {
                console.log(res.data)
                if (res.data.status == false){
                    setGagal(res.data.payload)
                }else{
                    setGagal(res.data.message)
                }
                setLoad(false)
                document.getElementById("form").reset();

            })
    };

    if (load){
        return (
            <Loading/>
        )
    }else{
        return(
            <div>
                <Nav/>
                <div className="container">
                    <div className="container-fluid">

                        <h2>Tambah Jenis Produk</h2>

                        <br/>
                        <form id="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-3">
                                <input type="text" {...register("nama",{required:true})} className="form-control" name="nama" id="nama"/>
                                <label htmlFor="nama">Nama jenis produk</label>
                            </div>
                            {errors.nama && <span className="invalid-feedback">Nama harus diisi</span>}
                            <div className="form-floating mb-3">
                                <input type="text" {...register("keterangan",{required:true})} name="keterangan" id="keterangan" className="form-control"/>
                                <label htmlFor="keterangan">Keterangan</label>
                            </div>
                            {errors.keterangan && <span className="invalid-feedback">Keterangan harus diisi</span>}
                            <br/>
                            <button className="btn btn-primary" type="submit">Simpan</button>
                            <Link className="btn btn-secondary" to="/jenis_produk">Kembali</Link>

                        </form>
                        <br/>
                        { gagal }
                    </div>
                </div>
            </div>
        )
    }


}