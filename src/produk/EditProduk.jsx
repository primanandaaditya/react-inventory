import React, {useEffect, useState} from "react";
import Nav from "../komponen/Nav";
import Endpoint from "../config/Endpoint";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Loading from "../komponen/Loading";


export default function EditProduk(){

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [ljenis,setLjenis] = useState([])
    const [lsatuan,setLsatuan] = useState([])
    const [load,setLoad] = useState(false)
    const [message,setMessage]=useState('')
    const [payload,setPayload]=useState('')
    const {id, setId} =  useParams() ///untuk get param id yang dilemparkan
    const [foto,setFoto] = useState('')

    useEffect(() => {
        getJenisProduk()
        getSatuan()

        fetch(Endpoint.BASE_URL + 'produk/detail', {
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
                setValue("nama", json.payload.nama);
                setValue("id_jenis", json.payload.id_jenis)
                setValue("id_satuan", json.payload.id_satuan)
                setValue("hbeli", json.payload.hbeli)
                setFoto(Endpoint.GAMBAR_URL + json.payload.gambar)
            })
    }, []);



    const getJenisProduk = () => {
        axios.get(Endpoint.BASE_URL + `jenis_produk`)
            .then(res => {
                console.log(res.data.payload)
                setLjenis(res.data.payload)
            })
    }
    const getSatuan = () => {
        axios.get(Endpoint.BASE_URL + `satuan`)
            .then(res => {
                console.log(res.data.payload)
                setLsatuan(res.data.payload)
            })
    }
    const onSubmit = data => {
        setLoad(true)

        const fdata = new FormData()
        fdata.append('id', id)
        fdata.append('nama', data.nama)
        fdata.append('id_jenis',data.id_jenis)
        fdata.append('id_satuan',data.id_satuan)
        fdata.append('hbeli',data.hbeli)
        fdata.append('gambar', foto)

        axios.post(Endpoint.BASE_URL + `produk/edit`, fdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then(res => {
                setMessage(res.data.message)
                setLoad(false)
            })
    }

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
                        <h2>Edit Produk</h2>

                        <br/>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("id",{required:true})} type="hidden" value={id}/>
                            <center>
                                <img width="150" height="150"  src={ foto }  className="img-thumbnail" alt="Tidak ada gambar"/>
                            </center>

                            <br/>
                            <div className="form-floating mb-3">
                                <input {...register("nama",{required:true})} type="text" className="form-control" id="nama"
                                       placeholder="name@example.com"/>
                                <label htmlFor="nama">Nama produk</label>
                            </div>
                            {errors.nama && <div className="invalid-feedback">
                                This field is required
                            </div>}

                            <div className="form-floating mb-3">
                                <input {...register("hbeli",{required:true})} type="number" className="form-control" id="hbeli"/>
                                <label htmlFor="nama">Harga beli (Rp.)</label>
                            </div>
                            {errors.hbeli && <span>This field is required</span>}


                            <div className="form-floating">
                                <select {...register("id_jenis",{required:true})} className="form-select" aria-label="Default select example">
                                    <option selected>Pilih salah satu</option>
                                    {ljenis.map(x => (
                                        <option value={x.id}>{x.nama}</option>
                                    ))}
                                </select>
                                <label htmlFor="floatingSelect">Pilih jenis produk</label>
                            </div>
                            {errors.id_jenis && <span>This field is required</span>}


                            <br/>
                            <div className="form-floating">
                                <select {...register("id_satuan",{required:true})} className="form-select" aria-label="Default select example">
                                    <option selected>Pilih salah satu</option>
                                    {lsatuan.map(x => (
                                        <option value={x.id}>{x.nama}</option>
                                    ))}
                                </select>
                                <label htmlFor="floatingSelect">Pilih satuan</label>
                            </div>
                            {errors.id_satuan && <span>This field is required</span>}

                            <br/>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="submit" className="btn btn-primary">Simpan</button>
                                <Link to="/produk" className="btn btn-secondary">Kembali</Link>
                            </div>

                        </form>

                        <br/>
                        { message == '' ?  <div></div> : <div className="alert alert-success" role="alert">
                            {message}
                        </div>}

                    </div>
                </div>
            </div>
        )
    }



}