class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action :authorized

  def current_user
    User.find_by(id:session[:user_id])
  end

  def authorized
    return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

  private

  def render_not_found_response
    render json: { error: "Not found" }, status: :not_found
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end
  
end
