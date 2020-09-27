class Business < ApplicationRecord
    validates :business_name, :city, :state, :business_zip_code, :category, :phone, :street_address, :business_id, :owner_id, presence: true

    # has_many :reviews,
    #     foreign_key: :business_id,
    #     primary_key: :id,
    #     class_name: :Business

    belongs_to :user,
        foreign_key: :owner_id,
        primary_key: :id,
        class_name: :User
end
