class AdminController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  def index
	render layout: 'layouts/application.html.erb'
  end

   def reports
	render layout: 'layouts/application.html.erb'
  end
end
