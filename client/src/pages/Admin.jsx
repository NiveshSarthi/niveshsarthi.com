import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LayoutDashboard, Building, MessageSquare, Plus, Trash2, Edit } from 'lucide-react';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('properties');
    const [properties, setProperties] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [newProperty, setNewProperty] = useState({
        title: '', description: '', price: '', location: '', type: 'Residential', bedrooms: 0, bathrooms: 0, area: '', images: ['']
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const pRes = await axios.get('http://localhost:5000/api/properties');
            const cRes = await axios.get('http://localhost:5000/api/contacts');
            setProperties(pRes.data);
            setContacts(cRes.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const propertyData = {
                ...newProperty,
                details: {
                    bedrooms: newProperty.bedrooms,
                    bathrooms: newProperty.bathrooms,
                    area: newProperty.area
                }
            };
            await axios.post('http://localhost:5000/api/properties', propertyData);
            setIsAdding(false);
            fetchData();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await axios.delete(`http://localhost:5000/api/properties/${id}`);
                fetchData();
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <main className="pt-24 bg-transparent min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white/5 backdrop-blur-md border-r border-white/5 p-8 hidden lg:block">
                <h2 className="text-primary font-display text-xl mb-12 tracking-widest font-bold uppercase">Admin Center</h2>
                <nav className="space-y-4">
                    <button
                        onClick={() => setActiveTab('properties')}
                        className={`w-full flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-bold p-3 transition-all ${activeTab === 'properties' ? 'text-primary bg-primary/5' : 'text-slate-500 hover:text-white'
                            }`}
                    >
                        <Building size={16} /> Properties
                    </button>
                    <button
                        onClick={() => setActiveTab('contacts')}
                        className={`w-full flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-bold p-3 transition-all ${activeTab === 'contacts' ? 'text-primary bg-primary/5' : 'text-slate-500 hover:text-white'
                            }`}
                    >
                        <MessageSquare size={16} /> Leads
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <section className="flex-1 p-8 lg:p-12 overflow-y-auto bg-white/5 backdrop-blur-sm">
                {activeTab === 'properties' ? (
                    <div>
                        <div className="flex justify-between items-center mb-12">
                            <h1 className="text-3xl font-display text-white uppercase font-bold tracking-wider">Property Inventory</h1>
                            <button
                                onClick={() => setIsAdding(!isAdding)}
                                className="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform"
                            >
                                <Plus size={24} />
                            </button>
                        </div>

                        {isAdding && (
                            <form onSubmit={handleCreate} className="bg-charcoal p-8 border border-primary/20 mb-12 grid md:grid-cols-2 gap-6">
                                <input
                                    type="text" placeholder="TITLE" className="bg-background-dark border-b border-white/10 p-3 text-[10px] tracking-[0.2em] text-white font-bold outline-none focus:border-primary"
                                    onChange={(e) => setNewProperty({ ...newProperty, title: e.target.value })} required
                                />
                                <input
                                    type="text" placeholder="LOCATION" className="bg-background-dark border-b border-white/10 p-3 text-[10px] tracking-[0.2em] text-white font-bold outline-none focus:border-primary"
                                    onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })} required
                                />
                                <input
                                    type="text" placeholder="PRICE" className="bg-background-dark border-b border-white/10 p-3 text-[10px] tracking-[0.2em] text-white font-bold outline-none focus:border-primary"
                                    onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })} required
                                />
                                <select
                                    className="bg-background-dark border-b border-white/10 p-3 text-[10px] tracking-[0.2em] text-white font-bold outline-none focus:border-primary"
                                    onChange={(e) => setNewProperty({ ...newProperty, type: e.target.value })}
                                >
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                </select>
                                <div className="grid grid-cols-3 gap-4">
                                    <input type="number" placeholder="BED" className="bg-background-dark border-b border-white/10 p-3 text-[10px] text-white font-bold outline-none" onChange={(e) => setNewProperty({ ...newProperty, bedrooms: e.target.value })} />
                                    <input type="number" placeholder="BATH" className="bg-background-dark border-b border-white/10 p-3 text-[10px] text-white font-bold outline-none" onChange={(e) => setNewProperty({ ...newProperty, bathrooms: e.target.value })} />
                                    <input type="text" placeholder="AREA" className="bg-background-dark border-b border-white/10 p-3 text-[10px] text-white font-bold outline-none" onChange={(e) => setNewProperty({ ...newProperty, area: e.target.value })} />
                                </div>
                                <input
                                    type="text" placeholder="IMAGE URL" className="bg-background-dark border-b border-white/10 p-3 text-[10px] tracking-[0.2em] text-white font-bold outline-none"
                                    onChange={(e) => setNewProperty({ ...newProperty, images: [e.target.value] })} required
                                />
                                <textarea
                                    placeholder="DESCRIPTION" className="bg-background-dark border-b border-white/10 p-3 text-[10px] text-white font-bold outline-none md:col-span-2"
                                    onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })} required
                                ></textarea>
                                <button type="submit" className="bg-primary text-white py-4 text-[10px] tracking-[0.3em] font-bold md:col-span-2 uppercase">Publish Property</button>
                            </form>
                        )}

                        <div className="grid gap-4">
                            {properties.map(p => (
                                <div key={p._id} className="bg-charcoal p-6 border border-white/5 flex items-center justify-between group">
                                    <div className="flex items-center gap-6">
                                        <img src={p.images[0]} className="w-16 h-16 object-cover border border-white/10" alt="" />
                                        <div>
                                            <h4 className="text-white font-bold text-sm tracking-wider uppercase">{p.title}</h4>
                                            <p className="text-primary text-[9px] tracking-[0.2em] uppercase">{p.location} • {p.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="text-slate-500 hover:text-white"><Edit size={16} /></button>
                                        <button onClick={() => handleDelete(p._id)} className="text-slate-500 hover:text-red-500"><Trash2 size={16} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-3xl font-display text-white uppercase font-bold tracking-wider mb-12">Client Leads</h1>
                        <div className="grid gap-4">
                            {contacts.map(c => (
                                <div key={c._id} className="bg-charcoal p-8 border border-white/5">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-white font-bold tracking-[0.2em] uppercase">{c.name}</h4>
                                            <p className="text-primary text-[10px] tracking-widest">{c.email} • {c.phone}</p>
                                        </div>
                                        <span className="text-slate-600 text-[10px] font-bold uppercase">{new Date(c.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-slate-400 font-serif italic text-sm">{c.message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Admin;
