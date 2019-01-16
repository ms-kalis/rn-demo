package club.mastershu.kalis.zbmdx;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.umeng.analytics.MobclickAgent;
import com.umeng.message.PushAgent;
import com.umeng.socialize.UMShareAPI;

import club.mastershu.kalis.zbmdx.R;
import club.mastershu.kalis.zbmdx.invokenative.PushModule;
import club.mastershu.kalis.zbmdx.invokenative.ShareModule;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // SplashScreen.show(this);
        super.onCreate(savedInstanceState);
        SplashScreen.show(this, R.style.SplashScreenTheme);
        MobclickAgent.setSessionContinueMillis(1000);
        PushModule.initPushSDK(this);
        PushAgent.getInstance(this).onAppStart();
        ShareModule.initSocialSDK(this);
    }

    @Override
    public void onResume() {
        super.onResume();
        MobclickAgent.onResume(this);
    }
    @Override
    protected void onPause() {
        super.onPause();
        MobclickAgent.onPause(this);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        UMShareAPI.get(this).onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
    };
 }
}
