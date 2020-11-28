json.extract! business,
            :id,
            :business_name,
            :city,
            :state,
            :business_zip_code,
            :category_1,
            :category_2,
            :category_3,
            :phone,
            :street_address,
            :lat,
            :lng,
            :owner_id,
            :reviews

json.photos business.photos.map { |file| url_for(file) }
