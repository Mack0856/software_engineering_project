class LoginController < ApplicationController
  def login
    user = User.find_by_email(params[:email])
    if user && user.password == params[:password]
    	session[:user_id] = user.id
      render json: { id: user.id }, status: :ok
    else
      render json: "", status: :unauthorized
    end
  end
end
