# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                  api_user POST   /api/user(.:format)                                                                      api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#      api_business_reviews GET    /api/businesses/:business_id/reviews(.:format)                                           api/reviews#index {:format=>:json}
#                           POST   /api/businesses/:business_id/reviews(.:format)                                           api/reviews#create {:format=>:json}
#       api_business_review GET    /api/businesses/:business_id/reviews/:id(.:format)                                       api/reviews#show {:format=>:json}
#    api_business_schedules GET    /api/businesses/:business_id/schedules(.:format)                                         api/schedules#index {:format=>:json}
#            api_businesses GET    /api/businesses(.:format)                                                                api/businesses#index {:format=>:json}
#              api_business GET    /api/businesses/:id(.:format)                                                            api/businesses#show {:format=>:json}
#                           PATCH  /api/businesses/:id(.:format)                                                            api/businesses#update {:format=>:json}
#                           PUT    /api/businesses/:id(.:format)                                                            api/businesses#update {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: "static_pages#root"
    namespace :api, defaults: {format: :json} do
        resources :users, only: [:create, :show]
        resource :session, only: [:create, :destroy]

        resources :businesses, only: [:index, :show, :update] do
          resources :reviews, only: [:index, :show, :create]
          resources :schedules, only: [:index]
        end
        #   resources :photos only: [:index, :show, :create]
        # end
    end
end

