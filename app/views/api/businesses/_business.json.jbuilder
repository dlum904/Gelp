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
            :website,
            :lat,
            :lng,
            :owner_id,
            :reviews,
            :cost

json.photos business.photos.map { |file| url_for(file) }
