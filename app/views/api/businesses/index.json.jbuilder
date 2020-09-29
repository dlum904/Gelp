@businesses.each do |business|
    json.set! business.id do
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
            :owner_id
    
    end
end
