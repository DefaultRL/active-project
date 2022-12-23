import "./app.scss";
import React from "react";
import Item from "./Item";
import Input from "./Input";

function App() {
    const [items, setItems] = React.useState<
        { value: number; _id: string; created_at: number }[]
    >([]);

    React.useEffect(() => {
        getListItems();
    }, []);

    const getListItems = () => {
        fetch("http://localhost:8000/app/number").then(async function (
            response
        ) {
            const data = await response.json();
            setItems(data);
        });
    };

    return (
        <div className="background--custom">
            <div className="app">
                <div className="header">
                    <h1>Active Developpements</h1>
                </div>
                <div className="input-container">
                    <Input />
                </div>
                <div className="list-container">
                    {items.map((item) => {
                        return (
                            <Item
                                value={item.value}
                                _id={item._id}
                                onDelete={getListItems}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
