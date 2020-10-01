import React from 'react';
import { Link } from 'react-router-dom';

class BusinessPhotoUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
            this.props.fetchBusiness(this.props.match.params.businessId);
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];

        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photo: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const { photos } = this.state;
        const formData = new FormData();
        
        for (let i = 0; i < photos.length; i++) {
            formData.append("business[photos][]", photos[i]);
        }
        $.ajax({
            url: `/api/businesses/${this.props.business.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false,
        }).then(this.props.history.push(`/businesses/${this.props.business.id}`))
        
    }
    

    render() {
        const preview = this.state.photos ? <img src={this.state.photos} /> : null
        
        if (this.props.business) {
            return (
                <div className="image upload-container">
                    <h2><Link to={`/businesses/${this.props.business.id}`}> {this.props.business.business_name}</Link>: Add Photos</h2>
                    <h3>Preview</h3>
                        {preview}
                        <form onSubmit={this.handleSubmit}>
                            <input      
                            type="file"
                            onChange={e => this.setState({ photos: e.target.files })}
                            multiple
                            />
                            <input type="submit"/>
                        </form>
               
            </div>
    
            )
        }
        else
        return ( null )
    }
}

export default BusinessPhotoUpload