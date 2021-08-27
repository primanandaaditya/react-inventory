import React from "react";
import Nav from "../komponen/Nav";
import Endpoint from "../config/Endpoint";
import axios from "axios";
import {Link} from "react-router-dom";
class JenisProduk extends React.Component{

    state = {
        payload: [],
        loading:false
    }

    hapus(idJenis){
        fetch(Endpoint.BASE_URL + 'jenis_produk', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: idJenis
            })
        }).then(json => {
            this.load()
        })
    }

    load(){
        this.setState({
            loading: true
        })
        axios.get(Endpoint.BASE_URL + `jenis_produk`)
            .then(res => {
                console.log(res.data.payload)
                this.setState({
                    payload: res.data.payload,
                    loading: false
                })
            })
    }
    componentDidMount() {
        this.load()
    }

    render() {
        if (this.state.loading){
            return (
                <div>
                    Loading...
                </div>
            )
        }else{
            return (
                <div>
                    <Nav/>

                    <div className="container">
                        <div className="container-fluid">
                            <h2>Jenis Produk</h2>
                            <br/>

                            <Link to="/add_jenis_produk" className="btn btn-primary">Tambah</Link>
                            <br/>
                            <br/>

                            <table className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Keterangan</th>
                                    <th>Aksi</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.payload.map(x => (
                                    <tr key={x.id}>
                                        <td>{x.nama}</td>
                                        <td>{x.keterangan}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                <button type="button" onClick={() => this.hapus(x.id)} className="btn btn-outline-danger">Hapus</button>
                                                <Link to={'/edit_jenis_produk/' + x.id} className="btn btn-outline-primary">Edit</Link>
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
}
export default JenisProduk;