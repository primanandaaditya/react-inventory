import React, {useEffect, useState} from "react";
import Nav from "../komponen/Nav";
import Endpoint from "../config/Endpoint";
import axios from "axios";
import {Link} from "react-router-dom";
import Loading from "../komponen/Loading";

export default function Produk(){

    const [payload,setPayload]=useState([])
    const [load,setLoad]=useState(false)
    const getPayload = () => {
        setLoad(true)
        axios.get(Endpoint.BASE_URL + `produk`)
            .then(res => {
                console.log(res.data.payload)
                setPayload(res.data.payload)
                setLoad(false)
            })
    }
    function hapus (idProduk){
        console.log(idProduk)
        fetch(Endpoint.BASE_URL + 'produk', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: idProduk
            })
        }).then(json => {
            getPayload()
        })
    }

    useEffect(() => {
        getPayload()
    },[])

    if(load){
        return (
            <div>
                <Loading/>
            </div>
        )
    }else{
        return(
            <div>
                <Nav/>

                <div className="container">
                    <div className="container-fluid">
                        <h2>Produk</h2>
                        <br/>

                        <Link to="/add_produk" className="btn btn-primary">Tambah</Link>
                        <br/>
                        <br/>


                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>Gambar</th>
                                <th>Nama</th>
                                <th>Jenis</th>
                                <th>Satuan</th>
                                <th>Harga Beli</th>
                                <th>Aksi</th>
                            </tr>
                            </thead>
                            <tbody>
                            {payload.map(x => (
                                <tr key={x.id}>
                                    <td><img alt="Tidak ada gambar" width="60" height="60" src={Endpoint.GAMBAR_URL + x.gambar}/></td>
                                    <td>{x.nama}</td>
                                    <td>{x.jenis}</td>
                                    <td>{x.satu}</td>
                                    <td style={{"text-align":"right"}}>{'Rp. ' + x.hbeli.toLocaleString() }</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                                            <button type="button" onClick={ () => hapus(x.id) }  className="btn btn-outline-danger">Hapus</button>
                                            <Link to={'/edit_produk/' + x.id} className="btn btn-outline-primary">Edit</Link>
                                        </div>

                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


}