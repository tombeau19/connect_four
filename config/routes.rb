Rails.application.routes.draw do
  namespace :api do
    get "/characters", to: "characters#index", as: "characters"
  end
end
