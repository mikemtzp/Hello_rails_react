Rails.application.routes.draw do
  get 'root/index'
  namespace :api do
    resources :greetings, only: [:index], format: :json
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'
end
