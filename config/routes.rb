Rails.application.routes.draw do

  namespace :api do
    resources :characters
  end
  
end
