import React from 'react';

class BusinessPhotoUpload extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('business[photos]', this.state.photos);
    $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    });
    }

}