class Business < ApplicationRecord
    validates :business_name, :city, :state, :business_zip_code, :phone, :street_address, :owner_id, presence: true

    has_many :reviews
        # foreign_key: :business_id,
        # primary_key: :id,
        # class_name: :Business

    belongs_to :user,
        foreign_key: :owner_id,
        primary_key: :id,
        class_name: :User

    has_many_attached :photos

    has_many :schedules,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business
end
