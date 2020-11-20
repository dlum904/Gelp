@businesses.each do |business|
    json.set! business.id do
    json.partial! './api/businesses/business', business: business
    # json.photos business.photos.map { |file| url_for(file) }
    end
end
