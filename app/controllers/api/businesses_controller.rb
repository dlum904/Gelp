class Api::BusinenessesController < ApplicationController

    def show
        @business = Business.find(params[:id])
    end

    private

    def business_params
        params.require(:business).permit(
            :business_name,
            :city,
            :state,
            :business_zip_code,
            :category,
            :phone,
            :street_address,
            :owner_id
        )
    end
end