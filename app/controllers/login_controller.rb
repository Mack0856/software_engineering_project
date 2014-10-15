class LoginController < ApplicationController
  def login
    raise params.inspect
    user = User.find_by_email(params[:email])
    if user && user.password == params[:password]
      render json: "", status: :ok
    else
      render json: "", status: :unauthorized
    end
  end
end
