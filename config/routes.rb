Rails.application.routes.draw do
  
  resources :replies
  resources :comments
  resources :setlist_tracks
  resources :setlists
  resources :tracks
  resources :albums
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "/cookie_click", to: "sessions#click"
  get "/user_setlists", to: "setlists#user_setlists"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
