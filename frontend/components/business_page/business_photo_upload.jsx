import React from 'react';
import { Link } from 'react-router-dom';

class BusinessPhotoUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
            photoUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append('business[photos][]', this.state.photoFile);
        }
        $.ajax({
            url: `/api/businesses/${this.props.business.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        }).then(this.props.history.push(`/businesses/${this.props.business.id}`))
    }

    handleClick(e) {
        e.preventDefault();
        document.getElementById('selectedFile').click()
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

        if (this.props.business) {
            return (
                <div className="image upload-container">
                    <h2><Link to={`/businesses/${this.props.business.id}`}> {this.props.business.business_name}:</Link> Add Photos</h2>

                    <div className="image-preview">{preview}<input className= "browse-button" type="button" value="Browse Files" onClick={this.handleClick} /></div>
                    
                    
                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <input type="file"
                            id="selectedFile"
                            onChange={this.handleFile.bind(this)} />
                        <input className= "upload-submit"type="submit" value="Upload"/>
                    </form>

                </div>

            )
        }
        else
            return (null)
    }
}

export default BusinessPhotoUpload