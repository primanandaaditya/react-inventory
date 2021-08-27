import React, {useEffect, useState} from "react";
import Nav from "../komponen/Nav";
import {Link} from "react-router-dom";
import {  useForm } from "react-hook-form";
import { useParams} from "react-router-dom";
import Endpoint from "../config/Endpoint";
import Loading from "../komponen/Loading";

export default function EditJenisProduk(){
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const [load, setLoad] = useState(false)
    const [gagal, setGagal] = useState([])
    const {id, setId} =  useParams()

    useEffect(() => {
        fetch(Endpoint.BASE_URL + 'jenis_produk/detail', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(response => response.json())
            .then(json => {
                //untuk memberi nilai pada setiap textbox
                setValue("nama", json.payload.nama);
                setValue("keterangan", json.payload.keterangan)
            })
    }, []);


    const onSubmit = data => {
        setLoad(true)
        fetch(Endpoint.BASE_URL + 'jenis_produk', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nama: data.nama,
                keterangan: data.keterangan
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json.message)
                setGagal(json.message)
                setLoad(false)
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

                        <h2>Edit Jenis Produk</h2>

                        <br/>
                        <form id="form" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("id",{required:true})} type="hidden" value={id}/>
                            <div className="form-floating mb-3">
                                <input type="text" {...register("nama",{required:true})} className="form-control" name="nama" id="nama"/>
                                <label htmlFor="nama">Nama jenis produk</label>
                            </div>
                            {errors.nama && <span className="invalid-feedback">Nama harus diisi</span>}
                            <div className="form-floating mb-3">
                                <input  type="text" {...register("keterangan",{required:true})} name="keterangan" id="keterangan" className="form-control"/>
                                <label htmlFor="keterangan">Keterangan</label>
                            </div>
                            {errors.keterangan && <span className="invalid-feedback">Keterangan harus diisi</span>}
                            <br/>
                            <button className="btn btn-primary" type="submit">Update</button>
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