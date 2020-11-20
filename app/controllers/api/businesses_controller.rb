class Api::BusinessesController < ApplicationController

    def show
        @business = Business.find(params[:id])
    end

    def index
        @businesses = Business.all

        if params[:category]
            if !@businesses.where(category_1: params[:category]).empty?
                @businesses = @businesses.where(category_1: params[:category])
            elsif !@businesses.where(category_2: params[:category]).empty?
                @businesses = @businesses.where(category_2: params[:category])
            elsif !@businesses.where(category_3: params[:category]).empty?
                @businesses = @businesses.where(category_3: params[:category])
            end
        end
    end

    def create
        @business = Business.new(business_params)

        if @business.save
            render "api/businesses/show"
        else
            render json: @business.errors.full_messages, status: 422
        end
    end

    def update
        @business = Business.find(params[:id])
        @business.update(business_params)
    end

    private

    def business_params
        params.require(:business).permit(
            :business_name,
            :city,
            :state,
            :business_zip_code,
            :category_1,
            :category_2,
            :category_3,
            :lat,
            :lng,
            :phone,
            :street_address,
            :owner_id,
            photos: []
        )
    end
end
