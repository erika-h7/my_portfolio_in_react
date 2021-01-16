import React from "react";

// components
import CardItem from "../card-item/card-item.components.jsx";

// styles
import "./directory.styles.scss";

class Directory extends React.Component {

    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'Planning Project',
                imageUrl: 'images/work1.jpg',  // local images in public folder
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'Designing Project',
                // imageUrl: 'https://www.mtpplc.com/wp-content/uploads/apple-devices-800x702.jpg',
                imageUrl: 'images/work4.jpg',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'Project',
                // imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHL03_FV430?wid=1420&hei=930&fmt=png-alpha&qlt=80&.v=1601164359000',
                imageUrl: 'images/work6.jpg',
                id: 3,
                linkUrl: ''
            }
            ]
        };
         
    }

    render() {

        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) =>(
                        <CardItem key={id} { ...otherSectionProps } />
                    ))
                }
            </div>
        )
    }
}

export default Directory;