import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../../../Components/ToyCard/ToyCard';

const ProductCategory = () => {

    const [alltoys, setAllToys] = useState([]);
    const [catToys, setCatToys] = useState([]);
    const [teddy, setTeddy] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/toys`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
                const cats = data.filter(item => item.category === 'cat');
                setCatToys(cats);
                const teddy = data.filter(item => item.category === 'teddy');
                setTeddy(teddy)
            })
    }, [])



    return (
        <div>
            <div className='mt-20'>
                <div className='w-1/2 mx-auto text-center mb-12'>
                    <h2 className='font-mono text-3xl mb-4 font-bold'>Trending Product</h2>
                    <p>The most popular and sought-after items of the moment, highlighting the latest consumer preferences and interests. Stay ahead of the curve by exploring this curated collection of products.</p>
                </div>
            </div>
            <Tabs className="w-10/12 mx-auto mb-24">
                <TabList className="text-center my-4">
                    <Tab>All</Tab>
                    <Tab>Cat</Tab>
                    <Tab>Teddy</Tab>
                </TabList>

                <TabPanel>
                    <div className='md:grid grid-cols-3 gap-12'>
                        {
                            alltoys.map(item => <ToyCard
                                key={item._id}
                                toy={item}

                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:grid grid-cols-3 gap-12'>
                        {
                            catToys.map(item => <ToyCard
                                key={item._id}
                                toy={item}

                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:grid grid-cols-3 gap-12'>
                        {
                            teddy.map(item => <ToyCard
                                key={item._id}
                                toy={item}

                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProductCategory;