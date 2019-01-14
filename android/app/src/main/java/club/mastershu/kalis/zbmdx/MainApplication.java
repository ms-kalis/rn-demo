package club.mastershu.kalis.zbmdx;

import android.app.Application;

import club.mastershu.kalis.zbmdx.invokenative.DplusReactPackage;
import club.mastershu.kalis.zbmdx.invokenative.RNUMConfigure;
import com.facebook.react.ReactApplication;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.umeng.commonsdk.UMConfigure;
import com.umeng.socialize.PlatformConfig;

import java.util.Arrays;
import java.util.List;

import club.mastershu.kalis.zbmdx.BuildConfig;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new DplusReactPackage(),
            new RNCWebViewPackage(),
            new VectorIconsPackage(),
            new RNGestureHandlerPackage(),
            new SplashScreenReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
      RNUMConfigure.init(this, "5c3830b4f1f5568110000c08", "Umeng", UMConfigure.DEVICE_TYPE_PHONE,
          "834bd9fbb5725ba660d76f4076498ef7");
  }

    {
        PlatformConfig.setWeixin("wx9039829556eb90f5", "618d25953a17eff14fba1ea09c01d653");
    }
}
