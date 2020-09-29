class Api::SchedulesController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def index
        @schedules = Schedule.all.where(business_id: params[:business_id])
    end

end