import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
    {
        id: 'p1',
        price: 16,
        title: 'BOOK',
        description: 'somekind of a book'
    }, {
        id: 'p2',
        price: 116,
        title: 'BOOKK',
        description: 'somekind of a bookk'
    }, {
        id: 'p3',
        price: 36,
        title: 'BOOKKK',
        description: 'somekind of a bookkk'
    }, {
        id: 'p4',
        price: 26,
        title: 'BOOKKKK',
        description: 'somekind of a bookkkk'
    },
]

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_DATA.map(item => {
                    return <ProductItem
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                    />
                })}
            </ul>
        </section>
    );
};

export default Products;
